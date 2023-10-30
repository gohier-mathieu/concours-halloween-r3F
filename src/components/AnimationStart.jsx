import gsap from "gsap";

export function performAnimation(
    isToggled,
    citTopRef,
    citBottomRef,
    roomRef
) {
    if (isToggled) {
        gsap.to(citTopRef.current.position, {
            y: -0.05,
            duration: 3,
            ease: "power1.inOut",
        });

        gsap.to(citBottomRef.current.position, {
            y: 0,
            duration: 3,
            ease: "power1.inOut",
        });
        
        gsap.to(roomRef.current.scale, {
            x: 0,
            y: 0,
            z: 0,
            delay: 0.4,
            duration: 2.5,
            ease: "power1.inOut",
        });
        

    } else {
        gsap.to(citTopRef.current.position, {
            y: 12,
            duration: 3,
            ease: "power1.inOut",
        });

        gsap.to(citBottomRef.current.position, {
            y: -22,
            duration: 3,
            ease: "power1.inOut",
        });
        
        gsap.to(roomRef.current.scale, {
            x: 0.8,
            y: 0.8,
            z: 0.8,
            delay: 0.4,
            duration: 1.8,
            ease: "power1.inOut",
        });
        

    }
}
