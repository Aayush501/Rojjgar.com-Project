document.getElementById('f2').addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const userEmail = document.getElementById('useremail2');
    const userPassword = document.getElementById('userpass2');
    const email = userEmail.value;
    const password = userPassword.value;

    try {
        const response = await axios.post('https://rojjgar-com.onrender.com/users/loginbyemail', {
            email : email,
            password : password
        });

        console.log(response.data);

        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        window.location.href = 'userPage.html';
        
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});

document.getElementById('f3').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const userContact = document.getElementById('usercontact3');
    const userPassword = document.getElementById('userpassc3');
    const contact = userContact.value;
    const password = userPassword.value;

    try {
        const response = await axios.post('https://rojjgar-com.onrender.com/users/loginbycontact', {
            contact : contact,
            password : password
        });

        console.log(response.data);

        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        window.location.href = 'userPage.html';
        
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});

document.getElementById('f4').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('username4').value;
    const contact = document.getElementById('usercontact4').value;
    const email = document.getElementById('useremail4').value;
    const password = document.getElementById('userpassc4').value;
    const state = document.getElementById('userstate4').value;
    const district = document.getElementById('userdist4').value;
    const city = document.getElementById('userct4').value;
    const pincode = document.getElementById('userpn4').value;
    const councellor = document.getElementById('usercncl4').value;

    try{
        const response = await axios.post('https://rojjgar-com.onrender.com/users/adduser', {
            name : name,
            password : password,
            contact : contact,
            email : email,
            state : state,
            district : district,
            city : city,
            pincode : pincode,
            councellor : councellor
        });

        console.log(response.data);

        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        window.location.href = 'userPage.html';

    } catch (err) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});

document.getElementById('f5').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const id = document.getElementById('jobseekeremail5').value;
    const password = document.getElementById('jspass5').value;

    try {
        const response = await axios.post('https://rojjgar-com.onrender.com/jobseekers/login', {
            id : id,
            password : password
        });

        console.log(response.data);

        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        window.location.href = 'jobseekerpage.html';
        
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});

document.getElementById('f6').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('jsname6').value;
    const contact = document.getElementById('jscontact6').value;
    const password = document.getElementById('jspassc6').value;
    const state = document.getElementById('jsstate6').value;
    const district = document.getElementById('jsdist6').value;
    const city = document.getElementById('jsct6').value;
    const pincode = document.getElementById('jspn6').value;
    const councellor = document.getElementById('jscncl4').value;

    try{
        const response = await axios.post('https://rojjgar-com.onrender.com/jobseekers/addjobseeker', {
            name : name,
            password : password,
            contact : contact,
            state : state,
            district : district,
            city : city,
            pincode : pincode,
            councellor : councellor
        });

        console.log(response.data);

        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        window.location.href = 'jobseekerpage.html';

    } catch (err) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});