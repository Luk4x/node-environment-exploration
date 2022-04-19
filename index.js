const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// listening to the port
app.listen(port, () => {
    console.log('✔️ Server started.');
});

// routes
app.get('/nightraid', (req, res) => {
    console.log(req);
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    // return a .json or a visual result.
    if (req.query['returnJson'] === 'true' || req.body['returnJson'] === true) {
        console.log('request type:', getParam(req), '\n');
        return res.json({ members, requestType: getParam(req) });
    } else {
        return res.send(`<img style="display:block; margin:auto; max-width:620px;" src="https://images5.alphacoders.com/605/thumb-1920-605794.jpg" alt="Nightraid image" /> <p style="text-align: center">Organization Name: Nightraid, Number of main members: ${Object.keys(members).length}.</p>`);
    }
});

app.get('/nightraid/:memberName', (req, res) => {
    console.log(req);
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    const { memberName } = req.params;

    // return a .json or a visual result.
    if (req.query['returnJson'] === 'true' || req.body['returnJson'] === true) {
        console.log('request type:', getParam(req), '\n');
        return res.json({ [memberName]: members[memberName], requestType: getParam(req) });
    } else {
        console.log(memberName, 'all info:', members[memberName]);

        return res.send(`<img style="display:block; margin:auto; max-width:620px;" src="${members[memberName].img}" alt="${members[memberName].name} image" /> <p style="text-align: center">Name: ${members[memberName].name}, Age: ${members[memberName].age}s.</p>`);
    }
});

// function to take the parameter type to avoid code repetition
const getParam = req => {
    if (Object.keys(req.query).length !== 0) {
        /*
            initial page query request pattern: ?fOrgName=NightRaid&fOrgMembers=10
            
            members page query request pattern: ?fName=Akame&fAge=16
        */

        return 'query';
    } else {
        /* 
        initial page body request pattern:
            {
                "fOrgName": "NightRaid",
                "fOrgMembers": 10
            }

        members page body request pattern:
            {
                "fName": "Akame",
                "fAge": 16
            }
        */

        return 'body';
    }
};

// nightraid members
members = {
    akame: {
        img: 'https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg',
        name: 'Akame',
        age: 16
    },
    leone: {
        img: 'https://vignette.wikia.nocookie.net/cardfight/images/0/0e/Leone.Anime.png/revision/latest?cb=20150409042208',
        name: 'Leone',
        age: 20
    },
    sheele: {
        img: 'https://animemotivation.com/wp-content/uploads/2017/07/Sheele-clumsy.png',
        name: 'Sheele',
        age: 20
    },
    mine: {
        img: 'https://i.pinimg.com/originals/e8/6f/b3/e86fb346115bc28bcbd296d9f8acc81d.jpg',
        name: 'Mine',
        age: 16
    },
    najenda: {
        img: 'https://i.pinimg.com/originals/ed/81/71/ed8171b0d25285f450231ccf0d95daf1.jpg',
        name: 'Najenda',
        age: 20
    },
    chelsea: {
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95740abd-84e1-40f6-9ea9-9a73ce727d1a/ddcet05-c7d85b7c-139d-4845-bf4d-9e02051780bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1NzQwYWJkLTg0ZTEtNDBmNi05ZWE5LTlhNzNjZTcyN2QxYVwvZGRjZXQwNS1jN2Q4NWI3Yy0xMzlkLTQ4NDUtYmY0ZC05ZTAyMDUxNzgwYmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bw299DnBG8l8STg1AWijOwcvRBIgQloDLDxznV80fos',
        name: 'Chelsea',
        age: 20
    },
    tatsumi: {
        img: 'https://i.pinimg.com/originals/aa/b4/7a/aab47ae6e05321e72bd358bd9ec935cd.jpg',
        name: 'Tatsumi',
        age: 17
    },
    lubbock: {
        img: 'https://assets.mycast.io/characters/lubbock-3593298-normal.jpg?1631121416',
        name: 'Lubbock',
        age: 19
    },
    bulat: {
        img: 'https://i.pinimg.com/originals/ad/0b/38/ad0b3853d06826b16a9f02717bd8cbc0.jpg',
        name: 'Bulat',
        age: 20
    },
    susanoo: {
        img: 'https://assets.mycast.io/actor_images/actor-susanoo-akame-ga-kill-304043_large.jpg?1637123241',
        name: 'Susanoo',
        age: 'Approx. 1000'
    }
};
