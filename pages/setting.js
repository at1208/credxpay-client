import React, { useState, useEffect, Fragment } from 'react';
import Layout from '../components/core/layout/layout';
import Private from '../components/core/private';
import TextField from '@material-ui/core/TextField';
import { getUserDetailById, isAuth,saveUserInfo } from '../actions/auth';
import { useToast } from "@chakra-ui/core";

const Setting = () => {
  const toast = useToast();
  const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
  });

  useEffect(() => {
     getUserDetailById(isAuth() && isAuth()._id)
       .then((response) => {
         if(response.error){
           return console.log(response.error)
         }
         setUser({...user, name: response.result.name, email: response.result.email, phone: response.result.phone })
       })
       .catch((err) => {
         console.log(err)
       })
  }, [])

const onSubmitUser = (e) => {
      e.preventDefault()
      saveUserInfo({ name: user.name, email: user.email })
        .then(response => {
          if(response.error){
            toast({
                  title: response.error,
                  position: "top",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                })
            return console.log(response.error)
          }
          toast({
                title: response.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
        })
        .catch((err) => {
          toast({
                title: err.error,
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true,
              })
        })
}
  return <Fragment>
             <Private>
                <Layout>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-6 col-sm-8 col-lg-5 setting-container">
                          <form onSubmit={onSubmitUser} className="text-center">
                               <TextField label="Name" variant="outlined"  className="setting-field" fullWidth size="small"  value={user.name} onChange={(e) => setUser({...user, name: e.target.value })}/>
                               <TextField label="Email" variant="outlined" className="setting-field" fullWidth size="small" value={user.email} onChange={(e) => setUser({...user, email: e.target.value })}/>
                               <TextField label="Phone" variant="outlined" className="setting-field" fullWidth size="small" value={"+91-" + user.phone} disabled={true}	/>
                               <button className="setting-saved-btn" onClick={onSubmitUser}>Save</button>
                          </form>
                        </div>
                      </div>
                    </div>
                </Layout>
             </Private>
         </Fragment>
}

export default Setting;
