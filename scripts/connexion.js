const email = document.getElementById('email')
const mdp = document.getElementById('motDePasse')
const mdpComfirm = document.getElementById('motDePasseConfirm')
const btnInscr = document.getElementById('btnIns')
const MessageMdp = document.getElementById('messageMdp')

MessageMdp.style.display='none'

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexMDP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

email.addEventListener('keydown',function(e){
    console.log(e.key)
})


email.addEventListener('keyup', ()=>{ 
    
    if (regexMail.test(email.value)){
        email.style.border = 'solid 1px rgb(100, 206, 123)'
        email.style.boxShadow=' 0px 0px 2px rgb(100, 206, 0.12)'
        email.style.background='white'
     
    } else {

        email.style.border= 'solid 2px rgba(220, 135, 135, 0.91)'
        email.style.boxShadow=' 0px 0px 2px rgb(199, 84, 84)' 
    }
})


/* REGEX MDP*/
btnInscr.addEventListener('click',function(e){
    e.preventDefault()
    console.log('ici 1')
    if(regexMDP.test(mdp.value) && regexMDP.test(mdpComfirm.value)){
        console.log('ok1')
    
        if(mdp.value===mdpComfirm.value){
            console.log('ok2')
            
            mdp.style.border = 'solid 1px rgb(100, 206, 123)'
            mdp.style.boxShadow=' 0px 0px 2px rgb(100, 206, 0.12)'

            
            mdpComfirm.style.border = 'solid 1px rgb(100, 206, 123)'
            mdpComfirm.style.boxShadow=' 0px 0px 2px rgb(100, 206, 0.12)'

            MessageMdp.style.display='none'

            console.log('mdp:',mdp.value)

            console.log('mdpComf:',mdpComfirm.value)
          
        }else{
            messageErreur()
            
        }
        
    }else{
        
        messageErreur()
    }

})


const messageErreur=function(){
    
    
    MessageMdp.style.display='block'
    MessageMdp.style.margin='0'
    MessageMdp.style.color='rgb(236, 87, 87)'
    MessageMdp.style.transform='translateY(-14px)'
    mdp.style.border= 'solid 2px rgba(220, 135, 135, 0.91)'
    mdp.style.boxShadow=' 0px 0px 2px rgb(199, 84, 84)' 
 
    mdpComfirm.style.border= 'solid 2px rgba(220, 135, 135, 0.91)'
    mdpComfirm.style.boxShadow=' 0px 0px 2px rgb(199, 84, 84)' 
}
