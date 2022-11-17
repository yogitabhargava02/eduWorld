# include<iostream>

using namespace std;

int main() {

    int i,j,n;
    cin>>n;
    int rc = (n-1) + n;

    for( i = 1; i <= rc; i++) {
        for( j = 1; j <= rc; j++) {
            if (i == 1 || i == rc || j == 1 || j == rc) {
                cout<<n<<" ";
            }
            else {
                cout<<(n-1)<<" ";
            }
        }
        cout<<endl;
    }

    return 0;
}