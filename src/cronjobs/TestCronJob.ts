import {CronJob, cronJob} from '@loopback/cron';
import {repository} from '@loopback/repository';
import {TodoRepository} from '../repositories';

@cronJob()
export class TestCronJob extends CronJob {
  totalTodos: number;
  constructor(
    @repository(TodoRepository) public todoRepository: TodoRepository,
  ) {
    super({
      name: 'job-A',
      onTick: async () => {
        await this.doJob();
      },
      cronTime: '*/1 * * * *',
      start: true,
    });

    this.totalTodos = 5;
  }

  async doJob() {
    console.log(`${new Date()} - Job is running 🥳.`);
    console.log(await this.todoRepository.findById(Math.floor(Math.random() * this.totalTodos + 1)));
  }
}
