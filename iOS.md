### VIPER

github: [viper_github](https://github.com/tirupati17/currency-converter-swift3.0-viper)

Link: [viper_qiita](https://qiita.com/YKEI_mrn/items/67735d8ebc9a83fffd29)

![viper](https://camo.qiitausercontent.com/feb56d873a71f7ede208c38bd6e31fa4d6d44569/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f39333931382f34346139656132642d623961362d646438322d616665362d6131643866333234613831382e706e67)

ref: [viper_ref](https://www.objc.io/issues/13-architecture/viper/#swift-addendum)

**プロトコルはメソッド、 プロトコルの中で呼び出すものをメンバとしてClassを設計している**

- 単一責任の原則を積極的に利用
- **Routerはモジュール間の遷移を制御**
  - **モジュール(画面)ごとにVIPERを設計する**(モジュール = 遷移が発生する画面毎との理解)

#### View
View と UIViewControllerを含む
- Presenterに指定された通りに表示する
- UIを操作する (delegateで伝える?)

#### Presenter
Moduleのメイン部品との橋渡し
- ViewとInteractorへ要求中の返値から入力イベントを受け取りますが、
- Interactorからデータ構造を受け取り、データ上にViewロジックを適用し、コンテンツの準備をし、最後にViewに何を表示するか教えます。
- Viewから呼ばれるもの
  - 関数の中では interactor (input)とrouterのmethodを呼び出す? <厳密にはprot
- Interactorから呼ばれるもの Output
  - 関数の中で Viewのメソッドを呼び出す
- ViewとRouterとInteractorの実態を持つ

#### Interactor
ユースケース(ビジネスロジックを集めた物)
関連する Entityは全て含む
- interactorが複数のタスクを終了すると結果をPresenterに通知する 例では PresenterのProtocol Outputを呼び出している
- ユースケースから得られた実行結果はInteractorによって綺麗な状態で、いつでも使える状態に保たれるべき

#### Entity
異なるデータタイプのカプセル化
―Interactorからのみ処理される

#### Rourter
モジュール間のビジネスロジック
モジュール間がどうなるべきか
- Presenterからルート表示画面を通知
- iOSの制限でViwwControllerが唯一画面間の遷移を実行できる (Controllerへの参照が必要)

![viper_modele](https://raw.githubusercontent.com/swiftingio/blog/%238-Viper/Images/PassingData.jpg?utm_source=swifting.io&utm_medium=web&utm_campaign=blog%20post)

![viper_use_or_not](https://raw.githubusercontent.com/swiftingio/blog/%238-Viper/Images/ViperOrNot.jpg?utm_source=swifting.io&utm_medium=web&utm_campaign=blog%20post)

ref: [use_or_not](https://swifting.io/blog/2016/03/07/8-viper-to-be-or-not-to-be/)
