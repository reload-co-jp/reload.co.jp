import Image from "next/image"
import styled from "styled-components"

import ContactForm from "@/components/ContactForm"

const Hero = styled.div`
  height: calc(100dvh - 4rem);
  padding: 15% 0;
`

const Boxes = styled.div`
  display: flex;
  gap: 3%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Box = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: solid 1px #f0f0f0;
  margin: 0.5rem 0;
  min-width: 24rem;
  padding: 0 1rem 1rem;
  width: 48%;
`

const MemberImage = styled.figure`
  display: block;
  max-width: 6rem;
  width: 100%;

  > img {
    display: block;
    width: 100%;
  }
`

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <h1>株式会社リロード - Reload, Inc.</h1>
        </nav>
      </header>
      <main>
        <Hero>
          <section>
            <h3>
              <strong>Reload</strong> provides new choice and new possibility.
            </h3>
            <p>株式会社リロードはシステムを通じて新しい選択肢と新しい可能性を与える会社です。</p>
            <p>
              リロード（reload）とは、「再び積み込む」という意味です。主にWebでは一度読み込んだデータを更新することを指します。
              株式会社リロードでは、リロードという言葉のように存在しているしくみ・サービスを再考し、刷新することを提案することで新しい選択肢と可能性を与えていくことを目指しています。
            </p>
          </section>
        </Hero>
        <section>
          <h2>Services</h2>
          <Boxes>
            <Box>
              <h3>Mobile Application Development</h3>
              <p>
                iOSアプリ、Androidアプリを中心にスマートフォンアプリケーションをバックエンドのウェブアプリケーションとともに設計開発を行っています。
              </p>
            </Box>
            <Box>
              <h3>Web Application Development</h3>
              <p>
                コンシューマー向けサービスから社内向けツール、DX支援などフロントエンドからバックエンドを通してWebアプリケーションを用いた課題解決を行っています。
              </p>
            </Box>
            <Box>
              <h3>Management Media</h3>
              <p>
                スマートフォンアプリケーションを中心に多数のコンシューマー向けサービスの企画・開発・運営を行っています。
              </p>
            </Box>
            <Box>
              <h3>Consulting</h3>
              <p>
                いままでのサービス開発の経験をもとに新規サービスのビジネスモデルからの検討や現状のビジネスの効率化を支援などの企画設計コンサルティングを行っています。
              </p>
            </Box>
            <Box>
              <h3>Cafe</h3>
              <p>
                「仕事をしやすく、それでいて遊びやすいような場所」を目指し、神田でコワーキングカフェを運営しています。
              </p>
              <p>
                <a href="//fffff-cafe.com" target="_blank" rel="noreferrer">
                  FFFFF Cafe
                </a>
              </p>
            </Box>
          </Boxes>
        </section>
        <section>
          <h2>Works</h2>
          <Boxes>
            <Box>
              <h3>写真で一言ボケて</h3>
              <p>ユーザーの投稿した写真に対してユーザーがボケを投稿し評価し合う大喜利サービス</p>
              <p>
                <a href="//bokete.jp" target="_blank" rel="noreferrer">
                  ボケて
                </a>
              </p>
            </Box>
            <Box>
              <h3>Aroma intelligence</h3>
              <p>匂いの計測データを用いて匂いの判別を行うアプリケーション</p>
            </Box>
            <Box>
              <h3>商品検索ツール</h3>
              <p>リユース業界向けの社内買取実績の商品検索ツールの開発</p>
            </Box>
            <Box>
              <h3>マッチングアプリ</h3>
              <p>iPhoneアプリ上で動作するマッチングアプリの開発・設計をバックエンドを含め開発</p>
            </Box>
            <Box>
              <h3>広報担当書支援ツール</h3>
              <p>
                ソーシャルメディアなどの情報の収集・分析を行い広報担当者のセレンディピティなど想起させるツールの開発
              </p>
            </Box>
            <Box>
              <h3>書籍紹介メディア</h3>
              <p>書籍の紹介するWebメディアの開発</p>
            </Box>
          </Boxes>
        </section>
        <section>
          <h2>Member</h2>
          <MemberImage>
            <Image src="/images/yamamoto.jpg" alt="山本翔平" width={96} height={96} />
          </MemberImage>
          <dl>
            <dt>
              <small>代表取締役</small>&nbsp;山本翔平
            </dt>
            <dd>
              2013年3月東京工業大学卒。インターネット広告代理店に新卒入社。iOSアプリケーションを設計・開発。2014年8月株式会社リロードを設立。ビジネス・サービスの構想からITシステムの設計・実装を行う。
            </dd>
          </dl>
        </section>
        <section>
          <h2>Recruit</h2>
          <p>リロードという箱にはまだなにもありません。会社のこれからを一緒につくるひとを探しています。</p>
          <p>
            株式会社リロードではともに新しいの可能性を創る仲間を探しています。
            新卒／既卒を問わず、年間を通じて多職種の人材を募集しております。
            ミッションに興味持った方、零細企業で力を試してみたい方はお気軽にご連絡ください。
          </p>
          <table>
            <caption>ソフトウェアエンジニア/コンサルタント</caption>
            <tbody>
              <tr>
                <th>仕事内容</th>
                <td>
                  <ul>
                    <li>ITコンサルティング</li>
                    <li>WEBサービス設計開発</li>
                    <li>新規サービス企画・設計・開発・運用</li>
                  </ul>
                  など
                </td>
              </tr>
              <tr>
                <th>応募資格</th>
                <td>大学・大学院卒業者（予定者）</td>
              </tr>
              <tr>
                <th>雇用体系</th>
                <td>正社員</td>
              </tr>
              <tr>
                <th>勤務地</th>
                <td>神田</td>
              </tr>
              <tr>
                <th>給与</th>
                <td>月給制 年収400万〜 / 時給制 1200円〜</td>
              </tr>
              <tr>
                <th>求める人物</th>
                <td>
                  <ul>
                    <li>大胆にチャレンジし、多くの失敗から学べる方</li>
                    <li>インターネットが好きな方</li>
                    <li>自分で考え自分で行動できる方</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>About</h2>
          <table>
            <tbody>
              <tr>
                <th>社名</th>
                <td>株式会社リロード / Reload, Inc.</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>山本翔平</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2014年8月22日</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>インターネット関連事業</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>2,000,000円</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>〒101-0046 東京都千代田区神田佐久間町 3-37-1 山茂登ビル 3F</td>
              </tr>
            </tbody>
          </table>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.230987599669!2d139.7686963!3d35.6940438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dbbfaf5488f%3A0xd8136757fff9a589!2z5qCq5byP5Lya56S-44Oq44Ot44O844OJ!5e0!3m2!1sja!2sjp!4v1679589253776!5m2!1sja!2sjp"
            referrerPolicy="no-referrer-when-downgrade"
            width="600"
            height="450"
            loading="lazy"
            title="google map"
          />
        </section>
        <section>
          <h2>Media</h2>
          <dl>
            <dt>
              <a href="//juqa.reload.co.jp" target="_blank" rel="noreferrer">
                ジュカ！ Juqa
              </a>
            </dt>
            <dd>街路樹や山で見かける植物を体系的に覚えるための学習サイト</dd>
          </dl>
          <dl>
            <dt>
              <a href="//shaqai.reload.co.jp" target="_blank" rel="noreferrer">
                翻訳語辞典 Shaqai
              </a>
            </dt>
            <dd>外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション</dd>
          </dl>
          <dl>
            <dt>
              <a href="//yama100.reload.co.jp" target="_blank" rel="noreferrer">
                Yama100 日本百名山チェックリスト
              </a>
            </dt>
            <dd>深田久弥が選んだ日本百名山の登頂記録をチェックできるアプリケーション</dd>
          </dl>
          <dl>
            <dt>
              <a href="//re-pseudo.reload.co.jp" target="_blank" rel="noreferrer">
                Re pseudo — 似非科学・陰謀論の主張検証
              </a>
            </dt>
            <dd>
              似非科学・陰謀論・誤情報の主張を、根拠・出典・流布状況・よく使われる論法とともに整理する検証カタログ
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="//r-subsidy.reload.co.jp" target="_blank" rel="noreferrer">
                Subsidy 中小企業・個人事業主向け補助金サーチ
              </a>
            </dt>
            <dd>
              中小企業・個人事業主向けに、Jグランツ掲載の補助金を都道府県・受付状態・目的から検索し、事業内容に合う制度を診断できる補助金ポータル
            </dd>
          </dl>
        </section>
        <section>
          <h2>Contact</h2>
          <ContactForm />
        </section>
      </main>
      <footer>
        <aside>
          <p>&copy;&nbsp;Reload, Inc.</p>
        </aside>
      </footer>
    </>
  )
}
