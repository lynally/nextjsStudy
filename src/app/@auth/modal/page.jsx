export default function Page({children}) {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div>

                <p>我是 @auth-modal-page</p>
                {children}
            </div>
        </main>
    );
}
