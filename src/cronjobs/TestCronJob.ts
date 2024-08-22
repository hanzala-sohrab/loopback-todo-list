import {CronJob, cronJob} from '@loopback/cron';

@cronJob()
export class TestCronJob extends CronJob {
  constructor() {
    super({
      name: 'job-A',
      onTick: () => {
        this.doJob();
      },
      cronTime: '*/1 * * * *',
      start: true,
    });
  }

  doJob() {
    console.log(`${new Date()} - Job is running 🥳.`);
  }
}
