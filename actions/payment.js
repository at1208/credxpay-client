import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';

export const createPayment = data => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/payment/create`, {
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

export const verifyPayment = data => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/payment/verify`, {
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

export const getPaymentByPayerId = payerId => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/payment/details/${payerId}`, {
        method: 'GET',
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


export const getBeneficiaryId = id => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/payment/beneficiary/${id}`, {
        method: 'GET',
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


export const validateIFSC = (ifsc) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url=`https://ifsc.razorpay.com/${ifsc}`
  return fetch(proxyurl + url, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      }
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
}
