function Grade({ gpa }) {
  const getLetterGrade = (gpa) => {
    switch (true) {
      case gpa >= 97 && gpa <= 100:
        return 'A+';
      case gpa >= 93 && gpa <= 96:
        return 'A';
      case gpa >= 90 && gpa <= 92:
        return 'A-';
      case gpa >= 87 && gpa <= 89:
        return 'B+';
      case gpa >= 83 && gpa <= 86:
        return 'B';
      case gpa >= 80 && gpa <= 82:
        return 'B-';
      case gpa >= 77 && gpa <= 79:
        return 'C+';
      case gpa >= 73 && gpa <= 76:
        return 'C';
      case gpa >= 70 && gpa <= 72:
        return 'C-';
      case gpa >= 67 && gpa <= 69:
        return 'D+';
      case gpa >= 63 && gpa <= 66:
        return 'D';
      case gpa >= 60 && gpa <= 62:
        return 'D-';
      case gpa >= 0 && gpa <= 59:
        return 'F';
      default:
        return 'Invalid GPA';
    }
  };

  return <span>{getLetterGrade(gpa)}</span>;
}

export default Grade;
