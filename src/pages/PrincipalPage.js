import PriceList from '../components/PriceListComponents';
import FirstExercise from '../exercises/FirstExercise';
import FourthExercise from '../exercises/FourthExercise';
import SecondExercise from '../exercises/SecondExercise';
import ThirdExercise from '../exercises/ThirdExercise';

function PrincipalPage(){
    
    
    return(
        <div class="background">
            <FirstExercise/>
            <SecondExercise/>
            <ThirdExercise/>
            <FourthExercise/>
        </div>
    );
}

export default PrincipalPage;