const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricStr) {
  const lineStrings = lyricStr.split("\n");

  const lyrics = [];
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000,
            time2 = result[2] * 1000,
            time3 = result[3] * (result[3].length === 3 ? 1 : 10);
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      const lineObj = {time, content};
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}