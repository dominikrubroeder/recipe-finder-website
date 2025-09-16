import {Button} from "@/components/atoms/button";
import {Marker} from "@/components/atoms/marker";

export function HomeHero() {
    return <section className="space-y-6">
        <div className="text-center space-y-6 px-4 py-16">
            <div>
                <h1><Marker>Healthy</Marker> meals, zero fluss</h1>
                <p>Discover eight quick, whole-food recipes that you can cook tonight <br/>– no processed junk, no
                    guesswork.
                </p>
            </div>

            <Button className="px-8">Start exploring</Button>
        </div>

        <div className="mx-auto bg-primary/10 rounded h-[50svh] w-full max-w-container-md"/>
    </section>
}