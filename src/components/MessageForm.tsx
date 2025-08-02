import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";


const MessageForm = () => {
    
  return (
    <>
        <section className="max-w-md mx-auto mt-[20px] p-6 border rounded-lg shadow-sm bg-amber-300 space-y-4">
            <h2 className="text-2xl text-gray-800 font-bold">Dm Delay Button</h2>

            <Textarea 
            placeholder="Enter Your Message"
            value={"Hello Guys"}
            />
            
            <Input 
            type="number"
            placeholder="Delay in seconds"
            value={10}
            />

            <Button className="w-full text-white">Send with delay</Button>

        </section>
    </>
  )
}

export default MessageForm;