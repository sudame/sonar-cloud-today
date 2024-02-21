# Sonar Cloud に良い感じにリダイレクトする君

次のURLにアクセスすると、良い感じにリダイレクトします。

```plain
https://sudame.github.io/sonar-cloud-today?id=<YOUR-PROJECT-ID>&offset=<NUMBER>&TYPE=<issue|activity>
```

## id

Sonar Cloud のプロジェクトID。

## offset

何日前からのデータを取得するか。

## type

| type     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| issue    | offset日前から今日までに発見された issue を表示するページにリダイレクト        |
| activity | offset日前から今日までの間のアクティビティグラフを表示するページにリダイレクト |