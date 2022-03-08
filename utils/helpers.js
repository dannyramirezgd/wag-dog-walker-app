module.exports = {
  profile_pic: (data) => {
    console.log(data);
    console.log(data.profile_pic);
    if (data.profile_pic !== 'null') {
      return `<img src="${data.profile_pic}" alt="owner profile image">`;
    } else {
      return `<img src="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg" alt="stock profile image">`;
    }
  },
};
