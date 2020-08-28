<?php

namespace App\Jobs;

use App\Mail\EK_MailArrow;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class EmailsEcolog implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $to;
    public $data;
    public function __construct($to = null,$data = null)
    {
        $this->to = $to;
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        new EK_MailArrow($this->data, 'chips.EK.EK_mailingSubscribe', 'Добро пожаловать');
    }
}
