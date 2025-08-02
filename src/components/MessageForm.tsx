import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";


const MessageForm = () => {

    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");

    const handleSend = () => {
        setIsSending(true);

        const id = setTimeout(() => {
            setSentMessage(message);
            setMessage("");
            setIsSending(false);
        }, delay * 1000);
        setTimerId(id)
    }

    const handleCancel = () => {
        if (timerId) {
            clearTimeout(timerId)
        }
        setIsSending(false);
    }

    return (
        <>
            <section className="max-w-md mx-auto mt-[20px] p-6 border rounded-lg shadow-sm bg-amber-300 space-y-4">
                <h2 className="text-2xl text-gray-800 font-bold">Dm Delay Button</h2>

                <Textarea
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <Input
                    type="number"
                    placeholder="Delay in seconds"
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                    disabled={isSending}
                />

                {!isSending ? (
                    <Button className="w-full text-white" onClick={handleSend}>Send with delay</Button>
                ) :
                    (
                        <Button className="w-full text-white" variant={"destructive"} onClick={handleCancel}>Cancel Sending</Button>
                    )
                }

                {sentMessage ? (
                    <section className="bg-green-200 border rounded p-3 text-green-900">
                        <p className="font-semibold">Message Sent Successfully :</p>
                        <p>{sentMessage}</p>
                    </section>
                ) : (
                    <p className="text-sm mt-4 text-center">Wait...</p>
                )
                
                }

            </section>
        </>
    )
}

export default MessageForm;