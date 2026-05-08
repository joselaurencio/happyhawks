import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Settings, Cpu, Code2, PenTool } from "lucide-react";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";

export default function Robot() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Robot</h1>
          <p className="text-xl text-slate-400">Engineering excellence, custom mechanics, and advanced autonomous programming.</p>
        </div>
      </div>

      <Section title="Robot Overview">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900 rounded-3xl min-h-[500px] border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image 
              src={`${BASE_PATH}/images/robot.png`} 
              alt="Happy Hawks Robot" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-2">Strategy & Capabilities</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Designed for speed and reliability, our robot focuses on efficient scoring cycles and robust defensive capabilities. Built using a combination of custom machined parts and 3D printed components.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Settings className="w-6 h-6 text-[#E2EDFA]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Mechanical Iterations</h4>
                  <p className="text-slate-400 text-sm">
                    <strong>Intake:</strong> Evolved from 6000rpm, to a 1150rpm coupled design, to a final overhang 1150rpm 5:7 ratio intake for multiple artifacts.<br/>
                    <strong>Shooter:</strong> Iterated from REV starter, added polyurethane sheets, and optimized with Teflon tape to reduce backspin and plastic tubing rails for guidance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Code2 className="w-6 h-6 text-[#E2EDFA]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Advanced Programming</h4>
                  <p className="text-slate-400 text-sm">Utilizing PedroPathing for Bezier curve trajectories, GoBILDA Pinpoint Odometry, and physics-based Limelight regression models.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section darker title="Programming Innovations" subtitle="The brain behind the machine">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedCard delay={0}>
            <h3 className="text-xl font-bold text-white mb-4">PedroPathing</h3>
            <p className="text-slate-400 mb-4">
              We implemented PedroPathing (Reactive Vector Follower) to generate complex, smooth Bezier curves for autonomous. It recalculates movement vectors every loop, making it much more robust than Roadrunner.
            </p>
            <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-[#E2EDFA] overflow-x-auto">
              <code>follower.followPath(scorePreload);</code>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <h3 className="text-xl font-bold text-white mb-4">Finite State Machines</h3>
            <p className="text-slate-400 mb-4">
              Our autonomous uses a 4-state Finite State Machine: IDLE → ALIGN → SPINUP → LAUNCH. Each action only begins when the previous is complete, ensuring reliability and no partial executions.
            </p>
            <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-[#E2EDFA] overflow-x-auto">
              <code>if (state == State.ALIGN) ...</code>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <h3 className="text-xl font-bold text-white mb-4">Vision RPM Regression</h3>
            <p className="text-slate-400 mb-4">
              Using Limelight 3A target area (ta), we reverse-calculate distance using power regression. We then map it to the flywheel using linear regression: <strong>RPM = 8.54 × distance + 1718.6</strong>.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <h3 className="text-xl font-bold text-white mb-4">PD Alignment Loop</h3>
            <p className="text-slate-400 mb-4">
              Our alignment system uses a PD controller driven by Limelight's horizontal angle (tx), with a deadband of 0.9° and an RGB LED to give drivers real-time feedback.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      <Section title="Iteration & Engineering Process">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-slate-300">"Always improving" is our philosophy. We embrace the cycle of testing, failing, learning, and redesigning.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-center border border-white/5">
            <PenTool className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h4 className="font-bold text-white mb-2">1. Design (CAD)</h4>
            <p className="text-slate-400 text-sm">Every part is designed and assembled in Onshape before physical manufacturing begins.</p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 text-center border border-white/5">
            <Settings className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h4 className="font-bold text-white mb-2">2. Prototyping</h4>
            <p className="text-slate-400 text-sm">We use 3D printing and laser cutting to quickly iterate on geometries and geometries.</p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 text-center border border-white/5">
            <Cpu className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h4 className="font-bold text-white mb-2">3. Testing & Code</h4>
            <p className="text-slate-400 text-sm">Rigorous field testing to tune PIDF controllers and refine autonomous paths.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
