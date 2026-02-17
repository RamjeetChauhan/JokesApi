import express from 'express';
const app = express();
const port =process.env.PORT || 4000;
 app.use(express.static('dist'));
// app.get('/',(req, res)=>{
//     res.send('server is ready')
// })

//gate a list  of five jokes

app.get('/api/jokes',(req, res)=>{
    const jokes = [
      {
        id: '1',
      title: 'first JOke',
      content: 'this is joke 1 ' 
      },
      {
        id: '2',
      title: 'first JOke',
      content: 'this is joke 2 ' 
      } ,
      {
        id: '3',
      title: 'first JOke',
      content: 'this is joke 3 ' 
      },
      {
        id: '4',
      title: 'first JOke',
      content: 'this is joke 4 ' 
      },
      {
        id: '5',
      title: 'first JOke',
      content: 'this is joke 5 ' 
      } 
    ];
    res.send(jokes);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
