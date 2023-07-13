import './index.css'

const Experience = () => {
    return (
        <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">    
	    <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">June 2023 – Present</span><div data-date="June 2022 – Sept. 2022" class="vtimeline-content">
                <h3>Smart Signals and Systems Lab</h3>
                <h4>Undergraduate Research Assistant</h4>
                <ul>
		    <li>
                        Research of self-supervised contrastive learning frameworks simCLR and MoCo v2
                    </li>
		    <li>
                        Understanding the problem of dimensionality collapse in self-supervised contrastive learning models
                    </li>
		    <li>
                        Understanding NashAE architecture in order to achieve disentanglement in deep learning models 
                    </li>
		    <li>
                        Used NashAE architecture to disentangle contrastive learning models in order to increase effectiveness by 4%
                    </li>
		    <li>
                        Constructed deep learning models using pytorch
                    </li>
                </ul>
            </div></div></div>
            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">January 2023 – May 2023</span><div data-date="June 2022 – Sept. 2022" class="vtimeline-content">
                <h3>UCSB</h3>
                <h4>Computer Vision Research Engineer</h4>
                <ul>
		    <li>
                        Worked with a graduate student in the UCSB math department in
                        reading algebraic geometry texts and academic papers
                    </li>
		    <li>
                        Gained insight into algebraic geometry concepts such as Ideals,
                        varieties, manifolds, projective space, gröbner bases and various proof
                        techniques

                    </li>
		    <li>
                        Analyzed how to find intersection of geometric objects in 3D space
                    </li>
		    <li>
                        Used knowledge of projective space to research techniques of 3D
                        reconstruction from 2D images

                    </li>
                </ul>
            </div></div></div>
        </div>

    </div>
    );
}

export default Experience