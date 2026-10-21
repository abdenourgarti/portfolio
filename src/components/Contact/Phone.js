import React, { useRef } from 'react';
import { HiChatBubbleLeftRight, HiPaperAirplane, HiUser } from 'react-icons/hi2';
import { useLang } from '../../i18n';
import { gsap, reducedMotion, ScrollTrigger, useGSAP } from '../../scroll';

// A phone buzzes on the desk, gets picked up, and a new client is answered. Without motion it simply
// shows the finished conversation, which is the CSS default state.
const Phone = () => {
  const { ui, lang } = useLang();
  const p = ui.contact.phone;
  const root = useRef(null);

  useGSAP(
    () => {
      if (reducedMotion) return;
      const q = gsap.utils.selector(root);
      const dir = lang === 'ar' ? -1 : 1;
      const device = q('.phone-device');
      const [first, second, reply] = q('.chat-msg');
      const field = q('.chat-field');
      const lying = { rotateX: 52, rotateY: 0, rotateZ: -10 * dir, y: 40, scale: 0.9 };
      const pop = { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(2)' };
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

      tl.set(device, lying)
        .set(q('.chat'), { autoAlpha: 0 }, 0)
        .fromTo(q('.phone-notif'), { autoAlpha: 0, yPercent: -120 }, { autoAlpha: 1, yPercent: 0, duration: 0.5, ease: 'back.out(1.6)' }, 0.4)
        .fromTo(q('.phone-ring'), { autoAlpha: 0.8, scale: 0.6 }, { autoAlpha: 0, scale: 1.5, duration: 1, stagger: 0.35, ease: 'power1.out' }, 0.4)
        .to(device, { x: 5, duration: 0.05, repeat: 11, yoyo: true, ease: 'none' }, 0.5)
        // Picked up: it rises and turns to face us.
        .to(device, { rotateX: 0, rotateY: -16 * dir, rotateZ: 0, y: 0, scale: 1, duration: 1.1, ease: 'power3.inOut' }, '+=0.3')
        .to(q('.phone-notif'), { autoAlpha: 0, yPercent: -120, duration: 0.3 }, '<0.5')
        .to(q('.chat'), { autoAlpha: 1, duration: 0.3 }, '<')
        .fromTo(first, { autoAlpha: 0, y: 10, scale: 0.9 }, pop)
        .fromTo(q('.chat-typing'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, '+=0.3')
        .to(q('.chat-typing'), { autoAlpha: 0, duration: 0.15 }, '+=1')
        .fromTo(second, { autoAlpha: 0, y: 10, scale: 0.9 }, pop, '<')
        // Abdenour types the answer and sends it.
        .set(field, { '--caret': 1 }, '+=0.4')
        .fromTo(field, { text: '' }, { text: p.reply, duration: p.reply.length * 0.05, ease: 'none' })
        .set(field, { '--caret': 0 })
        .to(q('.chat-send'), { scale: 0.75, duration: 0.12, repeat: 1, yoyo: true })
        .set(field, { text: '' })
        .fromTo(reply, { autoAlpha: 0, y: 10, scale: 0.9 }, pop, '<')
        .to({}, { duration: 2.4 })
        // Back on the desk until the next message.
        .to(device, { ...lying, duration: 1, ease: 'power3.inOut' })
        .to(q('.chat'), { autoAlpha: 0, duration: 0.3 }, '<');

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => (self.isActive ? tl.resume() : tl.pause()),
      });
    },
    { scope: root, dependencies: [lang], revertOnUpdate: true }
  );

  return (
    <div className="phone" ref={root} aria-hidden="true">
      <span className="phone-ring" />
      <span className="phone-ring" />
      <div className="phone-device">
        <div className="phone-screen">
          <span className="phone-notch" />
          <div className="phone-notif">
            <span className="phone-app">
              <HiChatBubbleLeftRight />
            </span>
            <span>
              <b>{p.notif}</b>
              <small>{p.m1}</small>
            </span>
          </div>
          <div className="chat">
            <div className="chat-head">
              <span className="chat-avatar">
                <HiUser />
              </span>
              <span>
                <b>{p.from}</b>
                <small>● {p.online}</small>
              </span>
            </div>
            <div className="chat-body">
              <p className="chat-msg">{p.m1}</p>
              <div className="chat-stack">
                <p className="chat-msg">{p.m2}</p>
                <p className="chat-typing">
                  <i />
                  <i />
                  <i />
                </p>
              </div>
              <p className="chat-msg is-me">{p.reply}</p>
            </div>
            <div className="chat-input">
              <span className="chat-field typed" data-placeholder={p.input} />
              <span className="chat-send">
                <HiPaperAirplane />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
