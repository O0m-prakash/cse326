var nameError=document.getElementById('name-error');
var GenderError=document.getElementById('Gender-error');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var ConformationError=document.getElementById('conformation-error');
var phoneError=document.getElementById('phone-error');
var occupationsError=document.getElementById('occupation-error');
var countryError=document.getElementById('country-error');
var submitError=document.getElementById('submit-error');

function ValidateName()
{
var name= document.getNameById('t1').value;
if (name.length==0)
{
    nameError.innerHTML='Name is required ';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-Z]*$/))
{
    nameError.innerHTML='Write full name'; 
    return false;
}
nameError.innerHTML='valid';
return true;
}