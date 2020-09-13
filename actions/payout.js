
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';

export const createPayout = (beneficiary_id) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/payout/create/${beneficiary_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
