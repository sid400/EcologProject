<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

/**
 * Class EK_MailArrow
 * @package App\Mail\LandingPage\Ekolog
 */
class EK_MailArrow extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var array into the mail
     */
    public $data;
    /**
     * @var string root path of site
     */
    public $url;
    /**
     * @var string Path to the view blade template
     */
    public $pathView;
    /**
     * @var string Subject for mail
     */
    public $subject;

    /**
     * Create a new message instance.
     *
     * @param $dataFromController array Data into the mail
     * @param $pathView  string  Path to the view blade template
     * @param $subject   string  Subject for mail
     */
    public function __construct($dataFromController, $pathView, $subject)
    {
        $this->data = $dataFromController;
        $this->pathView = $pathView;
        $this->subject = $subject;
        $this->url = URL::to('/');

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data1 = $this->data;
        return $this->view($this->pathView, compact('data1'))
            ->subject($this->subject);
    }
//from(), subject(), view() и attach()
}
