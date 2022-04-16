const express = require('express');
const app = express();
const port = 3000;

// listening to the port
app.listen(port, () => {
    console.log('✔️ Server started.');
});

// routes

app.get('/nightraid-members', (req, res) => {
    console.log(req);
    console.log(req.query);

    // verify if query object is empty. if yes, i'll show a visual result, if no, i'll show a .json result.
    if (Object.keys(req.query).length !== 0) {
        // ?orgName=NightRaid&orgMembers=10 (pattern to query request)

        // const name = req.query.name;
        // const members = req.query.members;
        const { orgName, orgMembers } = req.query; // Destructuring Assignment

        console.log(orgName, orgMembers);
        return res.json({ orgName, orgMembers }); // = {orgName: orgName, orgMembers: orgMembers}
    } else {
        return res.send('<img style="display:block; margin:auto; max-width:1350px;" src="https://images5.alphacoders.com/605/thumb-1920-605794.jpg" alt="nightraid image" /> <p style="text-align: center">Organization Name: NightRaid, Number of main members: 10.</p>');
    }
});

app.get('/nightraid-members/:memberName', (req, res) => {
    console.log(req);
    console.log(req.query);
    console.log(req.params);

    // verify if query object is empty. if yes, i'll show a visual result, if no, i'll show a .json result.
    if (Object.keys(req.query).length !== 0) {
        // ?name=Akame&age=16
        const { name, age } = req.query;
        console.log(name, age);

        return res.json({ name, age });
    } else {
        const { memberName } = req.params;
        const members = {
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
        console.log(members[memberName]);

        return res.send(`<img style="display:block; margin:auto; max-width:750px;" src="${members[memberName].img}" alt="${members[memberName].name} image" /> <p style="text-align: center">Name: ${members[memberName].name}, Age: ${members[memberName].age}s.</p>`);
    }
});

/*
app.get('/akame', (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        // ?name=Akame&age=16

        const { name, age } = req.query;
        return res.json({ name, age });
    } else {
        return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="akame image" /> <p style="text-align: center">Name: Akame, Age: 16s.</p>');
    }
});

app.get('/leone', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://vignette.wikia.nocookie.net/cardfight/images/0/0e/Leone.Anime.png/revision/latest?cb=20150409042208" alt="leone image" /> <p style="text-align: center">Name: Leone, Age: 20s.</p>');
});

app.get('/sheele', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://animemotivation.com/wp-content/uploads/2017/07/Sheele-clumsy.png" alt="sheele image" /> <p style="text-align: center">Name: Sheele, Age: 20s.</p>');
});

app.get('/mine', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/e8/6f/b3/e86fb346115bc28bcbd296d9f8acc81d.jpg" alt="mine image" /> <p style="text-align: center">Name: Mine, Age: 16s.</p>');
});

app.get('/najenda', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/ed/81/71/ed8171b0d25285f450231ccf0d95daf1.jpg" alt="najenda image" /> <p style="text-align: center">Name: Najenda, Age: 20s.</p>');
});

app.get('/chelsea', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95740abd-84e1-40f6-9ea9-9a73ce727d1a/ddcet05-c7d85b7c-139d-4845-bf4d-9e02051780bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1NzQwYWJkLTg0ZTEtNDBmNi05ZWE5LTlhNzNjZTcyN2QxYVwvZGRjZXQwNS1jN2Q4NWI3Yy0xMzlkLTQ4NDUtYmY0ZC05ZTAyMDUxNzgwYmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bw299DnBG8l8STg1AWijOwcvRBIgQloDLDxznV80fos" alt="chelsea image" /> <p style="text-align: center">Name: Chelsea, Age: 20s.</p>');
});

app.get('/tatsumi', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/aa/b4/7a/aab47ae6e05321e72bd358bd9ec935cd.jpg" alt="tatsumi image" /> <p style="text-align: center">Name: Tatsumi, Age: 17s.</p>');
});

app.get('/lubbock', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://assets.mycast.io/characters/lubbock-3593298-normal.jpg?1631121416" alt="lubbock image" /> <p style="text-align: center">Name: Lubbock, Age: 19.</p>');
});

app.get('/bulat', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://i.pinimg.com/originals/ad/0b/38/ad0b3853d06826b16a9f02717bd8cbc0.jpg" alt="bulat image" /> <p style="text-align: center">Name: Bulat, Age: 20s.</p>');
});

app.get('/susanoo', (req, res) => {
    return res.send('<img style="display:block; margin:auto; max-width:750px;" src="https://assets.mycast.io/actor_images/actor-susanoo-akame-ga-kill-304043_large.jpg?1637123241" alt="susanoo image" /> <p style="text-align: center">Name: Susanoo, Age: Approx. 1000s.</p>');
});
*/
