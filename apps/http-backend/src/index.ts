import express from 'express';

const app = express();
//@ts-ignore
import { envLoader } from '@repo/shared/config'

envLoader();

// app.post('/signin')

// app.post('/signup')

// app.post('/room')
console.log(process.env.JWT_SECRET)
app.listen(3001)