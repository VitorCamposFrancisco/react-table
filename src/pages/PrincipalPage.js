import PriceList from '../components/PriceListComponents';
import FirstExercise from '../exercises/FirstExercise';
import FourthExercise from '../exercises/FourthExercise';
import SecondExercise from '../exercises/SecondExercise';
import ThirdExercise from '../exercises/ThirdExercise';
import FifthExercise from '../exercises/FifthExercise';
import SixthExercise from '../exercises/SixthExercise';

function PrincipalPage(){
    
    
    return(
        <div class="container p-2">
            <FirstExercise/>
            <SecondExercise/>
            <ThirdExercise/>
            <FifthExercise/>
            <FourthExercise/>
            <SixthExercise/>
        </div>
    );
}

export default PrincipalPage;