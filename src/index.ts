function showWarning(message: string): void {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = message;
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

  const id = searchParams.get("id");
  if (id == null) {
    showWarning("IDが指定されませんでした");
    return;
  }

  const offest = parseInt(searchParams.get("offset") ?? "1", 10);

  const type = searchParams.get("type");
  if (type == null) {
    showWarning("Typeが指定されませんでした");
    return;
  }
  if (type !== "issue" && type !== "activity") {
    showWarning("Typeが不正です");
    return;
  }

  const toDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(toDate.getDate() - offest);

  const to = toYYYYMMDD(toDate);
  const from = toYYYYMMDD(fromDate);

  let href: string;
  switch (type) {
    case "issue": {
      href = `https://sonarcloud.io/project/issues?createdAfter=${from}&createdBefore=${to}&id=${id}`;
      break;
    }
    case "activity": {
      href = `https://sonarcloud.io/project/activity?from=${from}&to=${to}&id=${id}`;
      break;
    }
  }

  window.location.href = href;
}

main();
