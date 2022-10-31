// import {expect} from 'chai';
// import supertest from 'supertest';
// // import faker from ('faker')
// const request= supertest('https://gorest.co.in/public-api/');
// const Token='487a098062a75d77699085c5ac3a3e986f1d9a9aac4b8d7ee5eb4550c7f22e1e';
// describe('Negative Tests', () => {
//     it('401 Authentication Failed', () => {
         
//                         const data={
//                             email:`test-${Math.floor(Math.random()*9999)}@mail.com`,
//                             // name :faker.name.fristName,
//                             name :'aay',
//                             gender :'female',
//                             status : 'active',
//                         };
//                         request.post('users')
//                         // .set('Authorization',`Bearer ${Token}`)
//                         .send(data)
//                         .then((res)=>{
//                             console.log(res.body);
//                             expect(res.body.code).to.eq(401);
//                             expect(res.body.data.message).to.eq('Authentication Failed');
                            
//                         })
//                     });

//                     it('422 validation Failed',async () => {
//                         const data={
//                             email:`test-${Math.floor(Math.random()*9999)}@mail.com`,
//                             // email: faker.name.fristName;
//                             name :'Test1',
//                             gender :'female',
//                             status : 'active',
//                         };
//                      const postRes = request.post('users')
//                         .set('Authorization',`Bearer ${Token}`)
//                         .send(data)
//                         .then((res)=>{
//                             console.log(res.body);
//                             expect(res.body.code).to.eq(422);
//                             expect(res.body.data.message).to.eq("can't be blank");
//                             expect(res.body.field).to.eq(body);
                            
//                         })
//                     });
//     });