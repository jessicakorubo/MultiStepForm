const plans = document.querySelectorAll('.plan');
const planActive = document.querySelectorAll('.plan');
const num1 = document.querySelector('.num1');

// Collect plan info

plans.forEach((plan) =>{
    plan.addEventListener("click", (e) =>{
        console.log('A plan is clicked.');
        if (e.target.classList.contains('active')){
          e.target.classList.remove('active');
        }
        else (e.target.classList.add('active'))
        // e.target.nextElementSibling.classList.remove('active');
        // e.target.previousElementSibling.classList.remove('active');
        if (e.target.classList.contains('active')){ //Printing out the active plan name.
          var namesPr = e.target.querySelector('h4');
          console.log(namesPr);
        }

    })
})


planActive.forEach((planner) =>{
  if(planner.classList.contains('active')){
    console.log(planner);
  }
  let planName = planner.querySelector('.planName h4').innerHTML;
  let planPrice = planner.querySelector('.planName p').innerHTML;

  // planName.innerHTML= planPrice;
  // console.log(planPrice);
})


// if (planActive.classList.contains('active')){
//           console.log("Plan is active");
//     }
//     else {
//       console.log('Not Active');
//     }
// if (num1.classList.contains('done')){
//   console.log('done');
// }
// else {
//   console.log('Wrong container');
// }
// if (plans.classList.contains('plan')){
//   console.log("Plan is active");
//   let planName = document.querySelector('.planName h4');
//   let planPrice = document.querySelector('.planName p');
//   console.log(planName);
//   console.log(planPrice);
// }

// titles.forEach((title) => {
//   title.addEventListener("click", (e) => {
//     console.log('Gone');
//     const desc = e.target.nextElementSibling;
//     desc.style.display = desc.style.display === "block" ? "none" : "block";
//   });
// });