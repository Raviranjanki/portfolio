export const validate = (data) => {
    const pattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!data?.name){
      return {name: 'Name is required!'}
    }
    if(!data?.email) {
      return {email: 'Email is required!'}
    }
    else if(!pattren.test(data?.email)){
      return {email: 'Please enter a valid email'}
    }
    if(!data?.subject){
      return {subject: 'Subject is required!'}
    }
    if(!data?.message){
      return {message: 'Message is required!'}
    }
    return 0
  }
