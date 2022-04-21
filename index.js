const express = require('express');
const res = require('express/lib/response');
const { get } = require('express/lib/response');
const { restart } = require('nodemon');
const app = express();
app.use(express.json());
const port = 3000;

// listening to the port
app.listen(port, () => {
    console.log('✔️ Server started.');
});

// routes

// view all members
app.get('/NightRaid', (req, res) => {
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
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    /*
        pattern:
        {
            "img": "https://static.wikia.nocookie.net/akamegakill/images/0/03/Tatsumi%27s_Incursio.png/revision/latest?cb=20141101020933",
            "name": "Incursio",
            "age": 500
        }

        {
            "img": "https://static.wikia.nocookie.net/akamegakill/images/0/0c/Tumblr_ncxciwC4Ky1txrzruo2_r1_500.png/revision/latest?cb=20141005160441",
            "name": "Easdeath",
            "age": 20
        }

        {
            "img": "https://static.wikia.nocookie.net/akamegakill/images/2/2b/Kurome_main.png/revision/latest?cb=20140824205818",
            "name": "Kurome",
            "age": 15
        }
    */

    const { img, name, age } = req[getParam(req)];
    const newMember = { img, name, age }; // const newMember = ({ img, name, age } = req[getParam(req)]); - inaccurate.
    console.log('adding new member:', newMember);

    members.push(newMember);
    res.status(201).json(newMember);
});

// view specific member, the id can be: http://localhost:3000/NightRaid/Akame or http://localhost:3000/NightRaid/0
app.get('/NightRaid/:member', (req, res) => {
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    const { member } = req.params;
    if (getMember(member) === 404) {
        return res.status(404).json({ message: 'Member not Found' });
    }

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

// update member. id can be: http://localhost:3000/NightRaid/Akame or http://localhost:3000/NightRaid/0
app.put('/NightRaid/:member', (req, res) => {
    console.log('\nreq.query:');
    console.log(req.query);
    console.log('\nreq.params:');
    console.log(req.params);
    console.log('\nreq.body:');
    console.log(req.body);
    console.log();

    // getting member id
    const { member } = req.params;
    if (getMember(member) === 404) {
        return res.status(404).json({ message: 'Member not Found' });
    }

    // getting member updated info
    const { img, name, age } = req[getParam(req)];
    const updatedMember = { img, name, age };
    console.log(`updated member(${member}):`);
    console.log(updatedMember);

    // adding member in array and returning updated member
    const oldMember = getMember(member);
    updateMember(member, updatedMember);
    return res.json({ oldMember, updatedMember });
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
const getMember = (memberId, info) => {
    if (members.find(fMember => fMember.name === memberId)) {
        // using member id by name

        // getting member by name
        const rMember = members.find(fMember => fMember.name === memberId);
        if (info) {
            return rMember[info];
        } else {
            return rMember;
        }
    } else if (members[memberId]) {
        // using member id by array index

        if (info) {
            return members[memberId][info];
        } else {
            return members[memberId];
        }
    } else {
        return 404;
    }
};

// function to update member
const updateMember = (memberId, updatedMember) => {
    if (members.findIndex(fMember => fMember.name === memberId) >= 0) {
        // using member id by name

        // getting the member index by name
        const rMember = members.findIndex(fMember => fMember.name === memberId);
        console.log(rMember);

        //adding member in the array
        members[rMember] = updatedMember;
    } else {
        // using member id by array index

        members[memberId] = updatedMember;
    }
};
