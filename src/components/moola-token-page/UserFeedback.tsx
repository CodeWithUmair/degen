import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import Image from "next/image";

function UserFeedback() {
  return (
    <div className=" mx-auto mt-8 flex max-w-5xl gap-5 rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 pb-0 shadow-md">
      <div className="flex w-[60%] justify-center">
        <Image
          src="/mobile_retention.png"
          alt="Mobile Retention"
          width={500}
          height={400}
        />
      </div>
      <div className="flex w-[40%] flex-col items-center justify-center gap-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className=""
        >
          <motion.h4 variants={FADE_UP_ANIMATION_VARIANTS} className="">
            What Users are Saying
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className=""
        >
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-3xl"
          >
            <Image src="/stars.png" alt="Stars" width={300} height={50} />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className=""
        >
          <motion.h3
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-4xl font-bold"
          >
            4.5 out of 5 stars
          </motion.h3>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className=""
        >
          <motion.h3 variants={FADE_UP_ANIMATION_VARIANTS} className="text-sm">
            4.5 out of 5 stars
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className=""
        >
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-3xl"
          >
            <Image
              src="/apple-and-google-icons.png"
              alt="Apple and Google Icons"
              width={300}
              height={50}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default UserFeedback;
