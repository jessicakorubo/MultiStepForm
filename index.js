
const planName = document.querySelectorAll('.plan');
const plan = document.getElementsByClassName('plan')
const plan1 = document.querySelector('.plan1');
const plan2 = document.querySelector('.plan2');
const plan3 = document.querySelector('.plan3');

plan1.addEventListener('click', ()=> {
    if (plan1.classList.contains('active')){
        plan1.classList.remove('active');
    }
    else {
        plan2.classList.remove('active');
        plan3.classList.remove('active');
        plan1.classList.add('active')
    }
})
plan2.addEventListener('click', ()=>{
    if (plan2.classList.contains('active')){
        plan2.classList.remove('active');
    }
    else {
        plan1.classList.remove('active')
        plan3.classList.remove('active')
        plan2.classList.add('active')
    }
})
plan3.addEventListener('click', ()=> {
    if (plan3.classList.contains('active')){
        plan3.classList.remove('active')
    }
    else {
        plan1.classList.remove('active')
        plan2.classList.remove('active')
        plan3.classList.add('active')
    }
})


planName.forEach(planNames => {
    planNames.addEventListener('click', (e)=>{
        var activePlan = e.target.closest('.plan')

        const activePlanTitle = activePlan.querySelector('h4').innerHTML;
        const activePlanPrice = activePlan.querySelector('.planPrice').innerHTML;

        if (activePlan.classList.contains('active')){
            console.log(`Wow ${activePlanTitle} is active! with price ${activePlanPrice}` )
        }
        else {
            console.log('Uh oh, nothing is active')
        }

    //      switch(planNames.innerHTML) ;
            
    })     
})

// var finalPlan = document.getElementById('option');
// var finalPlanPrice = document.querySelector('.price');

// finalPlan.textContent = 'relly';

// plan.forEach(planDivs =>{
//     planDivs.addEventListener('click', ()=>{
//        switch(planDivs){
//             case 'plan1' :
//                 console.log('Plan Arcade');
//                 break; 
                
//             case 'plan2' :
//                 console.log('Plan Advaced');
//                 index ++
//                 break;
                
//             case plan[2] :
//                 var index = 2;
//                 console.log('Plan Pro');
//                 break;
//        }
       
    
//     })
// })
