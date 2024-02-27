import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {


    displayingData(): string[]{
        return ["Going to Gym", "Taking Bath", "Going for salah"]
    }


    createTask(task:string): string{
        //database me store karna normally, but yaha per wapis return kardere q k abhi database nai hai
        return task
    }

    
}
