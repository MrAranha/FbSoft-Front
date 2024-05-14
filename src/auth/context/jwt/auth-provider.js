'useclient';

importPropTypesfrom'prop-types';
import{useMemo,useEffect,useReducer,useCallback}from'react';

importaxios,{endpoints}from'src/utils/axios';

import{AuthContext}from'./auth-context';
import{setSession,isValidToken}from'./utils';

//----------------------------------------------------------------------
/**
*NOTE:
*Weonlybuilddemoatbasiclevel.
*Customerwillneedtodosomeextrahandlingyourselfifyouwanttoextendthelogicandotherfeatures...
*/
//----------------------------------------------------------------------

constinitialState={
user:null,
loading:true,
};

constreducer=(state,action)=>{
if(action.type==='INITIAL'){
return{
loading:false,
user:action.payload.user,
};
}
if(action.type==='LOGIN'){
return{
...state,
user:action.payload.user,
};
}
if(action.type==='REGISTER'){
return{
...state,
user:action.payload.user,
};
}
if(action.type==='LOGOUT'){
return{
...state,
user:null,
};
}
returnstate;
};

//----------------------------------------------------------------------

constSTORAGE_KEY='accessToken';

exportfunctionAuthProvider({children}){
const[state,dispatch]=useReducer(reducer,initialState);

constinitialize=useCallback(async()=>{
try{
constaccessToken=localStorage.getItem(STORAGE_KEY);

if(accessToken&&isValidToken(accessToken)){
setSession(accessToken);

constresponse=awaitaxios.get(endpoints.auth.me);

const{user}=response.data;

dispatch({
type:'INITIAL',
payload:{
user:{
...user,
accessToken,
},
},
});
}else{
dispatch({
type:'INITIAL',
payload:{
user:null,
},
});
}
}catch(error){
console.error(error);
dispatch({
type:'INITIAL',
payload:{
user:null,
},
});
}
},[]);

useEffect(()=>{
initialize();
},[initialize]);

//LOGIN
constlogin=useCallback(async(email,password)=>{
constdata={
email,
password,
};

constresponse=awaitaxios.post(endpoints.auth.login,data);

const{accessToken,user}=response.data;

setSession(accessToken);

dispatch({
type:'LOGIN',
payload:{
user:{
...user,
accessToken,
},
},
});
},[]);

//REGISTER
constregister=useCallback(async(email,password,firstName,lastName)=>{
constdata={
email,
password,
firstName,
lastName,
};

constresponse=awaitaxios.post(endpoints.auth.register,data);

const{accessToken,user}=response.data;

localStorage.setItem(STORAGE_KEY,accessToken);

dispatch({
type:'REGISTER',
payload:{
user:{
...user,
accessToken,
},
},
});
},[]);

//LOGOUT
constlogout=useCallback(async()=>{
setSession(null);
dispatch({
type:'LOGOUT',
});
},[]);

//----------------------------------------------------------------------

constcheckAuthenticated=state.user?'authenticated':'unauthenticated';

conststatus=state.loading?'loading':checkAuthenticated;

constmemoizedValue=useMemo(
()=>({
user:state.user,
method:'jwt',
loading:status==='loading',
authenticated:status==='authenticated',
unauthenticated:status==='unauthenticated',
//
login,
register,
logout,
}),
[login,logout,register,state.user,status]
);

return<AuthContext.Providervalue={memoizedValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes={
children:PropTypes.node,
};
