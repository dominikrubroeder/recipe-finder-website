import {HomeHero} from "@/components/organismns/home";
import {RealLifeSection} from "@/components/organismns/real-life-section";
import {FeaturesSection} from "@/components/organismns/features-section";
import {BrowseRecipesSection} from "@/components/organismns/browse-recipes-section";

export default function HomePage() {
    return <div className="space-y-24">
        <HomeHero/>
        <FeaturesSection/>
        <hr className="mx-auto max-w-container-md"/>
        <RealLifeSection/>
        <BrowseRecipesSection/>
    </div>
}