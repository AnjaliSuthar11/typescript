 function getChai (kind:string | number){
    if(typeof kind === 'string'){
        return `making ${kind} chai...`
    }
    return `chai order : ${kind}`
 }

// type narrowing
 function serverChai(msg ? : string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `serving default masala chai `
 }


//  exhaustic check
class kulhadChai {
    serve(){
        return `Serving Kulhad Chai`
    }
}
class Cutting{
    serve(){
        return `Serving Cutting Chai`
    }
}
function serve(chai:kulhadChai | Cutting){
    if(chai instanceof kulhadChai ){
        return chai.serve()
    }
}