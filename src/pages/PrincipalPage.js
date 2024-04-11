import PriceList from '../components/PriceListComponents';
import FirstExercise from '../exercises/FirstExercise';
import FourthExercise from '../exercises/FourthExercise';
import SecondExercise from '../exercises/SecondExercise';
import ThirdExercise from '../exercises/ThirdExercise';
import FifthExercise from '../exercises/FifthExercise';

function PrincipalPage(){
    
    
    return(
        <div class="container p-2">
            <FirstExercise/>
            <SecondExercise/>
            <ThirdExercise/>
            <FourthExercise/>
            <FifthExercise/>
        </div>
    );
}

export default PrincipalPage;