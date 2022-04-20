const express = require('express');
const { get } = require('express/lib/response');
const app = express();
app.use(express.json());
const port = 3000;

// listening to the port
app.listen(port, () => {
    console.log('✔️ Server started.');
});

// routes

// view all members
app.get('/nightraid', (req, res) => {
    console.log(req);
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    /* 
    query request pattern: ?returnJson=true
    
    body request pattern:
    {
        "returnJson": true
    }

    return a .json or a visual result. */
    if (req.query['returnJson'] === 'true' || req.body['returnJson'] === true) {
        console.log('request type:', getParam(req), '\n');
        return res.json({ members, requestType: getParam(req) });
    } else {
        return res.send(`<img style="display:block; margin:auto; max-width:620px;" src="https://images5.alphacoders.com/605/thumb-1920-605794.jpg" alt="NightRaid image" /> <p style="text-align: center">Organization Name: NightRaid, Number members: ${members.length}.</p>`);
    }
});

// add member
app.post('/NightRaid', (req, res) => {
    console.log(req);
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    const member2 = ({ img, name, age } = req[getParam(req)]);
    members.member2;
    return res.status(201).json(member2);
});

// view specific member (http://localhost:3000/NightRaid/Akame === http://localhost:3000/NightRaid/0)
app.get('/NightRaid/:member', (req, res) => {
    console.log(req);
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    const { member } = req.params;

    /* 
    query request pattern: ?returnJson=true
    
    body request pattern:
    {
        "returnJson": true
    }

    return a .json or a visual result. */
    if (req.query['returnJson'] === 'true' || req.body['returnJson'] === true) {
        console.log('request type:', getParam(req), '\n');
        return res.json({ member: getMember(member), requestType: getParam(req) });
    } else {
        console.log('member info:', getMember(member));

        return res.send(`<img style="display:block; margin:auto; max-width:620px;" src="${getMember(member, 'img')}" alt="${getMember(member, 'name')} image" /> <p style="text-align: center">Name: ${getMember(member, 'name')}, Age: ${getMember(member, 'age')}s.</p>`);
    }
});

// function to take the parameter type to avoid code repetition
const getParam = req => {
    if (Object.keys(req.query).length !== 0) {
        return 'query';
    } else {
        return 'body';
    }
};

// members list
const members = [
    {
        img: 'https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg',
        name: 'Akame',
        age: 16
    },
    {
        img: 'https://vignette.wikia.nocookie.net/cardfight/images/0/0e/Leone.Anime.png/revision/latest?cb=20150409042208',
        name: 'Leone',
        age: 20
    },
    {
        img: 'https://animemotivation.com/wp-content/uploads/2017/07/Sheele-clumsy.png',
        name: 'Sheele',
        age: 20
    },
    {
        img: 'https://i.pinimg.com/originals/e8/6f/b3/e86fb346115bc28bcbd296d9f8acc81d.jpg',
        name: 'Mine',
        age: 16
    },
    {
        img: 'https://i.pinimg.com/originals/ed/81/71/ed8171b0d25285f450231ccf0d95daf1.jpg',
        name: 'Najenda',
        age: 20
    },
    {
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95740abd-84e1-40f6-9ea9-9a73ce727d1a/ddcet05-c7d85b7c-139d-4845-bf4d-9e02051780bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1NzQwYWJkLTg0ZTEtNDBmNi05ZWE5LTlhNzNjZTcyN2QxYVwvZGRjZXQwNS1jN2Q4NWI3Yy0xMzlkLTQ4NDUtYmY0ZC05ZTAyMDUxNzgwYmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bw299DnBG8l8STg1AWijOwcvRBIgQloDLDxznV80fos',
        name: 'Chelsea',
        age: 20
    },
    {
        img: 'https://i.pinimg.com/originals/aa/b4/7a/aab47ae6e05321e72bd358bd9ec935cd.jpg',
        name: 'Tatsumi',
        age: 17
    },
    {
        img: 'https://assets.mycast.io/characters/lubbock-3593298-normal.jpg?1631121416',
        name: 'Lubbock',
        age: 19
    },
    {
        img: 'https://i.pinimg.com/originals/ad/0b/38/ad0b3853d06826b16a9f02717bd8cbc0.jpg',
        name: 'Bulat',
        age: 20
    },
    {
        img: 'https://assets.mycast.io/actor_images/actor-susanoo-akame-ga-kill-304043_large.jpg?1637123241',
        name: 'Susanoo',
        age: 'Approx. 1000'
    }
];

// function to get member
const getMember = (member, info) => {
    if (typeof TryParseInt(member, null) === 'number' || typeof member === 'number') {
        // number route
        if (info) {
            return members[member][info];
        } else {
            return members[member];
        }
    } else {
        // alternative name route
        for (const fMember of members) {
            if (member === fMember.name) {
                if (info) {
                    return fMember[info];
                } else {
                    return fMember;
                }
            }
        }
    }
};

// try parse int member function (like C#)
function TryParseInt(str, defaultValue) {
    let retValue = defaultValue;
    if (str !== null) {
        if (str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}
