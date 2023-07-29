import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container1">
      <div className="box1">
        <div className="head">
          <span>ABOUT</span>
          <h1>About Me</h1>
        </div>
        <div className="image">
          <img
            alt="bhavya"
            className="pic2"
            src="http://tokyo.ibthemespro.com/assets/img/slider/1.jpg"
          ></img>
        </div>
        <div className="para">
          <h2>Bhavya Taneja</h2>
          <h4>Web Developer</h4>
          <br />
          <hr />
          <p>
            Hi, my name is Riya Gupta and I began using WordPress when it first
            began. I’ve spent most of my waking hours for the last ten years
            designing, programming and operating WordPress sites.
            <br />
            <br />
            One of my specialties is taking an idea from scratch and creating a
            full-fledged platform. I go beyond to produce sites with a unique,
            outstanding, contemporary look-and-feel. With extensive knowledge of
            web mechanics, I’m able to optimize complex integrations to require
            little-to-no maintenance while running on their own for years.
          </p>
        </div>
        <div className="personaldetail">
          <div className="left1">
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Birthday:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>6 jul 2001</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Age:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>22</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Address:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>New Delhi ,India</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Email:</b>
                </p>
              </div>
              <div className="inner2text">
                <Link to="#">bhavyataneja142@gmail.com</Link>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Phone:</b>
                </p>
              </div>
              <div className="inner2text">
                <Link to="#">8076273997</Link>
              </div>
            </div>
          </div>
          <div className="right1">
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Nationality:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Indian</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Study:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Bachelor of Technology</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Degree:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Engineering</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Branch:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Computer Science</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Interest:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Playing Table Tennis</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <button className="btn">Download CV</button>

        <div className="box2">
        <div className="knowledge">
            <h3>KNOWLEDGE</h3>
          <ul>
            <li>Bootstrap, Angular</li>
            <li>React, Vue, Laravel</li>
            <li>Stylus, Sass, Less</li>
            <li>Gulp, Webpack, Grunt</li>
            <li>Tweenmax, GSAP</li>
          </ul>
        </div>
        <div className="interest">
        <h3>INTEREST</h3>

          <ul>
            <li>Make UI/UX Design</li>
            <li>Create Mobile App</li>
            <li>Site Optimization</li>
            <li>Custom Website</li>
            <li>Learn Ecommerce</li>
          </ul>
        </div>
      </div>
      </div>
      
    </div>
  );
};
export default About;
