import BannerPage from "@/components/page/Banner"
import About from "@/components/page/About"
import ProjectsPage from "@/components/page/Projects"

export default function Home() {
  return (
    <main>
        <BannerPage/>
        <About/>
        <ProjectsPage/>
    </main>
  )
}
