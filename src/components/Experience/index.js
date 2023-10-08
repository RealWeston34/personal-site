import './index.css'

const Experience = () => {
    return (

        
        <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">

        <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">Sep. 2023 – Present</span><div data-date="June 2022 – Sept. 2022" class="vtimeline-content">
                <h3>Advanced Life Technologies LLC</h3>
                <h4>Machine Learning Intern</h4>
                <ul>
		    <li>
            Developed deep learning algorithms for prosthetic arms with PyTorch, 
            enabling personalized customization options and enhancing user comfort and functionality.
                    </li>
		    <li>
            Used Kivy framework to implement GUI to instruct users through surgery simulation 
            and allowed administrators to interface with surgical robot.
                    </li>
		    <li>
            Programmed embedded systems using Python/C++ to allow efficient movement of various prosthetics.
                    </li>
		    <li>
            Integrated Pulse Physiology Engine into surgical robot to achieve human-like responses to stimuli.
                    </li>
		    <li>
            Incorporated conversational capabilities by integrating FastChat large language model into surgical robot.
                    </li>
            <li>
            Used OpenCV to display camera video to GUI and save video logs as mp4 files.
            </li>
                </ul>
            </div></div></div>

	    <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">June 2023 – Present</span><div data-date="June 2022 – Sept. 2022" class="vtimeline-content">
                <h3>Smart Signals and Systems Lab</h3>
                <h4>Computer Vision Researcher</h4>
                <ul>
		    <li>
            Used PyTorch to design a novel unsupervised image classification algorithm (DisCLR) which increased
accuracy in downstream tasks by 10%.
                    </li>
		    <li>
            Created python scripts to train model on CIFAR-10 dataset and measure accuracy using a linear classifier
trained for 100 epochs.
                    </li>
		    <li>
            Used Cuda library to save and load deep learning models onto GPU server for experimentation. 
                    </li>
		    <li>
            Successfully reduced model training time by pretraining encoder to learn better representations of images.
                    </li>
		    <li>
            Researched various unsupervised computer vision models and gained familiarity with academic literature.
                    </li>
                </ul>
            </div></div></div>
            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">Jan. 2023 – May 2023</span><div data-date="June 2022 – Sept. 2022" class="vtimeline-content">
                <h3>Math Research Apprenticeship</h3>
                <h4>Algorithm Researcher</h4>
                <ul>
		    <li>
            Worked with PhD student in developing a novel framework for 3D reconstruction of 2D images.
                    </li>
		    <li>
            Used algebraic geometry techniques to verify feature extraction of SIFT algorithm to increase robustness.

                    </li>
		    <li>
            Designed method to verify feature position relative to camera to achieve reconstruction through
triangulation.

                    </li>
		    <li>
            Gained insight into algebraic geometry concepts through reading academic papers and textbooks.

                    </li>
                </ul>
            </div></div></div>
            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">Aug. 2022 – Sep. 2022</span><div data-date="June 2022 – Sept. 2022" class="vtimeline-content">
                <h3>UCSB SIMS</h3>
                <h4>Engineering Intern</h4>
                <ul>
		    <li>
            Designed a soft robotic arm using plastic sheet and pneumatic tubing.
                    </li>
		    <li>
            Analyzed contraction of arm with MATLAB and created data visualizations with python to modify design
                    </li>
		    <li>
            Used C++ to program Arduino for prototype of soft robotic arm that contracts upon human touch. 
                    </li>
                </ul>
            </div></div></div>
        </div>

    </div>
    );
}

export default Experience