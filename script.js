let cardSubTitle= document.querySelector('.card-subtitle');
let cardText=document.querySelector('.AboutMe-card-text');
let cards=document.querySelectorAll('.card');
let formControls=document.querySelectorAll('.form-control');
let labels=document.querySelectorAll('label');
let textarea=document.querySelector('textarea');
const form = document.querySelector('form[name="submit-to-google-sheet"]');
const technologies = ['HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'GIT', 'SQL basics', 'Responsive design'];
const items = [
    "BSc(Hons) 2:1 Physics from King's College London",
    "QA software development level 4 course",
    "freeCodeCamp(FCC) responsive web design certification",
    "FCC relational databases certification",
    "FCC Data visualisation certification"
  ];
document.querySelector('.mode-toggler-btn').onclick=()=>{
    let intro =document.querySelector('.intro');
    let body=document.querySelector('body');
    
    if(document.querySelector('.intro-dark')){
        intro.classList.remove('intro-dark');
        intro.classList.add('intro-light');
        body.style.backgroundColor='#ffffff';
        body.style.color='#080808';
        cards.forEach(function(card) {
            card.style.backgroundColor = '#ffffff';
            card.style.color = '#080808';
        });
        formControls.forEach(function(formControl){
           formControl.style.setProperty('background-color', '#f0f0f0', 'important');
            formControl.style.setProperty('color', '#080808', 'important');
            
        });
        labels.forEach(function(label){
            label.style.color='#080808';
         });
         
        textarea.classList.remove('placeholder-colour-dark');
        textarea.classList.add('placeholder-colour-light');
        document.querySelector('#submit').classList.remove('btn-outline-light');
        document.querySelector('#submit').classList.add('btn-outline-dark');
        document.querySelector('#submit').classList.remove('custom-outline');
        return
    }
    else if(document.querySelector('.intro-light')){
        intro.classList.remove('intro-light');
        intro.classList.add('intro-dark');
        body.style.backgroundColor='#080808';
        body.style.color='#ffffff';
        cards.forEach(function(card) {
            card.style.backgroundColor = '#080808';
            card.style.color = '#ffffff';
        });
        formControls.forEach(function(formControl){
            formControl.style.setProperty('background-color', '#262626', 'important');
             formControl.style.setProperty('color', '#ffffff', 'important');
             
         });
         
         labels.forEach(function(label){
            label.style.color='#ffffff';
         });
         textarea.classList.remove('placeholder-colour-light');
         textarea.classList.add('placeholder-colour-dark');
         document.querySelector('#submit').classList.remove('btn-outline-dark');
         document.querySelector('#submit').classList.add('custom-outline');
         document.querySelector('#submit').classList.add('btn-outline-light');
        return
    }
}


function displayProfile(){
    document.querySelector('.AboutMe-card-text').classList.remove('skills-card');
    const link = document.createElement('a');
link.href = '#ContactForm';
link.textContent = 'say Hello.';
cardSubTitle.innerText='Personal Profile';
cardText.innerText=" I have recently graduated with a BSc(Hons) in Physics with a 2:1 from King's College London. My passion for programming has led me to explore the world of web development and through online self taught courses, I have been able to build a solid foundation in front-end development, namely HTML, CSS, and Javascript. I am eager to enhance my existing proficiencies and learn new skills. I am excited to embark on this coding journey and if you want to join me, don't hesitate to ";
cardText.appendChild(link);
document.querySelector('.active-link').classList.remove('active-link');
document.querySelector('.profile-link').classList.add('active-link');
}

function displaySkills(){
    cardSubTitle.innerText='Skills'
    cardText.innerText='';
    document.querySelector('.active-link').classList.remove('active-link');
document.querySelector('.skills-link').classList.add('active-link');
document.querySelector('.AboutMe-card-text').classList.add('skills-card');
technologies.forEach((technology) => {
    const div = document.createElement('div');
    div.classList.add('skills_skill');
    div.textContent = technology;
    cardText.appendChild(div);
  });
}

function displayExperience(){
    document.querySelector('.AboutMe-card-text').classList.remove('skills-card');
    cardSubTitle.innerText='Experience'
    cardText.innerText='';
    document.querySelector('.active-link').classList.remove('active-link');
    document.querySelector('.experience-link').classList.add('active-link');
    const ul = document.createElement('ul');
    ul.classList.add('experience_list');
    
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    
    cardText.appendChild(ul);
}


document.querySelector('form').addEventListener('submit',function validateForm(event) {
    document.querySelector('.valid-feedback').style.display='none';
    event.preventDefault();
    document.querySelector('.invalid-name').style.display='none';
    document.querySelector('.invalid-email').style.display='none';
    document.querySelector('.invalid-message').style.display='none';
    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value;
    let nameInput = document.getElementById('name');
    let nameValue = nameInput.value;
    let messageInput = document.getElementById('message');
    let messageValue = messageInput.value;
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if(nameValue.trim() === ''){
        document.querySelector('.invalid-name').style.display='block';
        return false;
      }
   else if (!emailRegex.test(emailValue)) {
      // Display error message or perform any other actions
      
      document.querySelector('.invalid-email').style.display='block';
      return false; // Prevent form submission
    }
  
  else if(messageValue.trim() === ''){
    document.querySelector('.invalid-message').style.display='block';
    return false;
  }
  console.log('should be sending')
    // If email is valid, the form will be submitted
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyjL_boDaaJ5mn40tPHmVb9aBa1LSdOR3ZtqKguSabjeqLmU6elG8XXzJVzKhOyri_P/exec'
   // const form = document.forms['submit-to-google-sheet']
   /*const form = document.querySelector('form[name="submit-to-google-sheet"]');
    form.addEventListener('submit', e => {
        console.log('first')
        e.preventDefault();*/
        console.log('second')
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {console.log('Success!', response);
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
          document.querySelector('.valid-feedback').style.display='block';
    })
          .catch(error => {
            console.error('Error!', error.message)
        document.querySelector('.invalid-submission').style.display='block';
        })
      })

  
/*form.addEventListener('submit', event=>{
    if(!form.checkValidity()){
        event.preventDefault()
    }
    form.classList.add('was-validated')
})

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn= document.querySelector('#submit');

const publicKey='32QaYQiTpufZjgCe6';
const serviceID='service_q3t6zfx';
const templateID='template_jj56rqi';
emailjs.init(publicKey);

document.querySelector('#submit').onclick=(event)=>{
event.preventDefault();

const inputFields={
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
}

emailjs.send(serviceID, templateID, inputFields).then(()=>{
    //something to show message has sent
    submitBtn.innerText='Message sent successfully'
    nameInput.value='',
    emailInput.value='',
    messageInput.value='';
}, (error)=>{
    console.log(error)
    alert('There has been an error in sending ypur message')
    //something to show an error has occured
}
)
}*/


