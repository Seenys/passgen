import Cryptr from 'cryptr';


if(!process.env.CRYPTR_SECRET) {
    throw new Error('CRYPTR_SECRET is not defined');
}


export const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
