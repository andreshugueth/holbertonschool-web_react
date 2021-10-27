interface MajorMinorCommon {
  credits: number;
}

interface MajorCredits extends MajorMinorCommon {
  major: "Major";
};

interface MinorCredits extends MajorMinorCommon {
  minor: "Minor";
};

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const op = subject1.credits + subject2.credits;
  const obj: MajorCredits = {
    credits: op,
    major: "Major",
  };

  return obj;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const op = subject1.credits + subject2.credits;
  const obj: MinorCredits = {
    credits: op,
    minor: "Minor",
  };

  return obj;
}
