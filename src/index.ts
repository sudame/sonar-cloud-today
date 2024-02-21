function showWarning(message: string): void {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = message;
  });
}

function setTitle(type: "issue" | "activity"): void {
  document.addEventListener("DOMContentLoaded", () => {
    document.title = `Sonar Cloudに良い感じにリダイレクトする君 | ${type}`;
  });
}

/** Date型を yyyy-mm-dd 形式で返す */
function toYYYYMMDD(date: Date): string {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
}

function main(): void {
  const searchParams = new URLSearchParams(window.location.search);

  const type = searchParams.get("type");
  if (type == null) {
    showWarning("Typeが指定されませんでした");
    return;
  }
  if (type !== "issue" && type !== "activity") {
    showWarning("Typeが不正です");
    return;
  }

  setTitle(type);

  const id = searchParams.get("id");
  if (id == null) {
    showWarning("IDが指定されませんでした");
    return;
  }
  const safeId = id.replace(/[^a-zA-Z0-9\-_]/g, "");

  const offest = parseInt(searchParams.get("offset") ?? "1", 10);

  const toDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(toDate.getDate() - offest);

  const to = toYYYYMMDD(toDate);
  const from = toYYYYMMDD(fromDate);

  let href: string;
  switch (type) {
    case "issue": {
      href = `https://sonarcloud.io/project/issues?createdAfter=${from}&createdBefore=${to}&id=${safeId}`;
      break;
    }
    case "activity": {
      href = `https://sonarcloud.io/project/activity?from=${from}&to=${to}&id=${safeId}`;
      break;
    }
  }

  window.location.href = href;
}

main();
