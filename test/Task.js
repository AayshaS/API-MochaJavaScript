import('dotenv').config;
import {expect} from 'chai';
    import supertest from 'supertest';
    const request= supertest('https://gorest.co.in/public-api/');
    //const Token='487a098062a75d77699085c5ac3a3e986f1d9a9aac4b8d7ee5eb4550c7f22e1e';
    const Token=process.env.USER_TOKEN
    let userId;
        describe('Users', () => {

            //get all user 

            it('Get/user', () => {
            request.get('users?access-token=${Token}').end((err,res)=>{
                console.log(err);
                console.log(res.body);
                expect(res.body.data).to.not.be.empty;
            // done();
            })
        
            });

            // get filtered data by query parameter
            it ('GET/users/id', () => {
                request.get('users?access-token= ${Token}&page=5&status=active&gender=female').end((err,res)=>{
                    console.log(err);
                    console.log(res.body);
                    res.body.data.forEach(data => {
                        expect(data.status).to.eq('active');
                        expect(data.gender).to.eq('female');
                        
                    });
                    // expect(res.body.data.id).to.be.eql(1);
                });
            });

            // create user by post request

            it('POST/users', () => {   
                const data={
                    email:`test-${Math.floor(Math.random()*9999)}@mail.com`,
                    name :'Test1',
                    gender :'female',
                    status : 'active',
                };
                request.post('users')
                .set('Authorization',`Bearer ${Token}`)
                .send(data)
                .then((res)=>{
                    console.log(res.body);
                    expect(res.body.data.email).to.eq(data.email);
                    expect(res.body.data.name).to.eq(data.name);
                    data.gender='male';
                    expect(res.body.data).to.deep.include(data)
                    userId=res.body.data.id
                })
            });

            it('PUT/users/:id', () => {
                const data={
                    status :"Active",
                    name :`Aasu ${Math.floor(Math.random()*9999)}`,
                }
                request.put(`users/${userId}`)
                .set('Authorization',`Bearer ${Token}`)
                .send(data)
                .then((res)=>{
                    console.log(res.body);
                })
            });

            it('DELETE/users/:id', () => {
                request.delete(`users/${userId}`)
                .set('Authorization',`Bearer ${Token}`)
                .then(res=>{
                    expect(res.body.data).to.be.eq(null)
                })
                
            });

        });