const grade = 'E';

switch(grade){
    case 'A':
        console.log('A -> very good');
        break;
    case 'B':
        console.log('B -> good keep learning');
        break;
    case 'C':
        console.log("c -> need improvement ");
        break;
    case 'D':
    case 'E':
        console.log("D-> Not Good");
        break;
    default:
        console.log("sorry invalid grade:");
}