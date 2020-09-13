import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';

export const createBeneficiary = data => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/beneficiary/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
